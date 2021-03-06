require 'fog/aws'

class ProfilePhotoUploader < CarrierWave::Uploader::Base

  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  if Rails.env.test?
    storage :file
  else
    storage :fog
  end

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  version :large do
    process resize_to_limit: [800, 800]
  end

  version :medium, from_version: :large do
    process resize_to_limit: [500, 500]
  end

  version :thumb do
    process resize_to_fit: [50, 50]
  end

  def extension_whitelist
    %w(jpg jpeg gif png)
  end

  def content_type_whitelist
    /image\//
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  def default_url(*arg)
    "http://d36lpqgxkhc8zn.cloudfront.net/assets/blank-avatar-dba2022dc26b6d6ec74e66106595c5e8143293ad079d314e02b22d0ed847d6ee.jpg"
  #  For Rails 3.1+ asset pipeline compatibility:
    # ActionController::Base.helpers.asset_path(
    # "/assets/" +
    #   [
        # Rails.application.assets.find_asset
        # ['blank-avatar.jpeg']
      #   .digest_path
      # ].join('_')
  # )
  end
  # Process files as they are uploaded:
  # process scale: [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process resize_to_fit: [50, 50]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_whitelist
      %w(jpg jpeg gif png)
  end
  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end
end
