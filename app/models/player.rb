class Player < ApplicationRecord
  validates :name, presence: true

  def index
  end
end
