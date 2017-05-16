class Api::V1::HomeController <
  ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end
end
