class AddToRefineryInquiriesInquiries < ActiveRecord::Migration
  def up
    add_column :refinery_inquiries_inquiries, :subject, :string
  end

  def down
    remove_column :refinery_inquiries_inquiries, :subject
  end
end
