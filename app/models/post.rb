class Post < ApplicationRecord
  validates :workday, {presence: true}
  validates :start, {presence: true}
  validates :end, {presence: true}
  validates :user_id, {presence: true}


end
