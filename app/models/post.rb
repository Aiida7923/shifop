class Post < ApplicationRecord
  validates :workday, {presence: true}
  validates :start, {presence: true}
  validates :end, {presence: true}
  validates :user_id, {presence: true}
  validate :start_end_check


  def user
    return User.find_by(id: self.user_id)
  end

  def start_end_check
    if self.start >= self.end
      errors.add(:start, "開始時間と終了時間を確認してください。")
    end
  end

end
