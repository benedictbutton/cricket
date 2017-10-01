require 'rails_helper'

# Acceptance Criteria
# [ ] I want to see a link to create an account from the index page
# [ ] I want to visit a create account page when I click on this link
# [ ] I want to fill in my account details
# [ ] When I click save, I want to receive a message indicating I created an account successfully
# [ ] Once I have created an account, I want to be logged in

feature "user creates account" do
  context "user is unauthenticated" do
    scenario "clicks on 'Sign Up' button from main page" do
      visit root_path

      expect(page).to have_link("Sign Up")

      click_on "Sign Up"

      expect(current_path).to eq '/auth/register/cmon_let_me_in'
      expect(page).to have_content("Create Account")
      expect(page).to_not have_link("Sign Out")
    end

    scenario "fills in account details in form and submits" do
      visit new_user_registration_path

      fill_in('First Name', with: 'John')
      fill_in('Last Name', with: 'Doe')
      fill_in('Player Name', with: 'jdoe11')
      fill_in('Password', with: 'password123')
      fill_in('Password Confirmation', with: 'password123')
      fill_in('Email', with: 'jdoe@email.com')

      click_button "Sign Up"

      expect(current_path).to eq '/'
      expect(page).to have_content("Welcome! You have signed up successfully.")
    end

    scenario "fills in form incorrectly and submits" do
      visit new_user_registration_path

      click_button "Sign Up"

      expect(page).to have_content "First name can't be blank"
      expect(page).to have_content "Last name can't be blank"
      expect(page).to have_content "Email can't be blank"
      expect(page).to have_content "Player name can't be blank"
      expect(page).to have_content "Password can't be blank"
      expect(current_path).to eq '/auth/register'
    end

    scenario "fills in form incorrectly and submits" do
      visit new_user_registration_path

      fill_in('First Name', with: 'John')
      fill_in('Last Name', with: 'Doe')
      fill_in('Player Name', with: 'jdoe11')
      fill_in('Password', with: 'password123')
      fill_in('Password Confirmation', with: 'Password123')

      click_button "Sign Up"

      expect(page).to have_content "Password confirmation doesn't match"
      expect(current_path).to eq '/auth/register'
    end
  end
end
