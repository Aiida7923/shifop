class User < ApplicationRecord
  validates :name, {presence: true}
  validates :sex, {presence: true}
  validates :birthday, {presence: true}
  validates :password, {presence: true}
end
