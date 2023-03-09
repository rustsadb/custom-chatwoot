class AddSubmittedAtToMessage < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :submitted_at, :datetime, null: true
  end
end
