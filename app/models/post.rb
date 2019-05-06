class Post < ApplicationRecord
  validates :workday, {presence: true}
  validates :start, {presence: true}
  validates :end, {presence: true}
  validates :user_id, {presence: true}

  def user
    return User.find_by(id: self.user_id)
  end
  
end
