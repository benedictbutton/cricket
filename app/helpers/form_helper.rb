# app/helpers/form_helper.rb
module FormHelper
  def setup_user(user)
    user.player ||= Player.new
    user
  end
end
