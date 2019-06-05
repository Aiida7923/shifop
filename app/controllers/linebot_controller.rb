class LinebotController < ApplicationController

  require 'line/bot'  # gem 'line-bot-api'

  # callbackアクションのCSRFトークン認証を無効
  protect_from_forgery :except => [:callback]

  def client
    @client ||= Line::Bot::Client.new { |config|
      config.channel_secret = ENV["LINE_CHANNEL_SECRET"]
      config.channel_token = ENV["LINE_CHANNEL_TOKEN"]
    }
  end



  def callback
    @posts = Post.where(user_id: @current_user.id)
    console.log(@posts)
    body = request.body.read

    signature = request.env['HTTP_X_LINE_SIGNATURE']
    unless client.validate_signature(body, signature)
      head :bad_request
    end

    events = client.parse_events_from(body)

    events.each { |event|

      logger.debug(event.message['text'])
      if [event.message['text']].include?("シフト")
        message = {
          type: 'text',
          text: "シフト教える"
        }
        client.reply_message(event['replyToken'], message)
      else
        message = {
          type: 'text',
          text: '「シフト」と入力するとシフトを教えてくれます。'
        }
        client.reply_message(event['replyToken'], message)
      end
      # おうむ返しのコード
      # case event
      #   when Line::Bot::Event::Message
      #     case event.type
      #     when Line::Bot::Event::MessageType::Text
      #       message = {
      #         type: 'text',
      #         text: 'あいうssas' #ここでLINEで送った文章を取得
      #       }
      #       client.reply_message(event['replyToken'], message)
      #     end
      #   end
    }

    head :ok
  end
end
