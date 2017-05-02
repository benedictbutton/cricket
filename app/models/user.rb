class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true
<<<<<<< HEAD
=======

  has_one :player
>>>>>>> 2fe611d9b7dfd036e8bea75008ae3dbc8412406b
end
