class User < ApplicationRecord
  validates :name, {presence: true}
  validates :sex, {presence: true}
  validates :email, {presence: true, uniqueness: true}
  validates :birthday, {presence: true}
  validates :password, {presence: true}
end
