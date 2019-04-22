class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.date :workday
      t.time :start
      t.time :end

      t.timestamps
    end
  end
end
