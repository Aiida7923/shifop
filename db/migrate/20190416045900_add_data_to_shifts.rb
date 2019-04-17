class AddDataToShifts < ActiveRecord::Migration[5.2]
  def change
    add_column :shifts, :workday, :data
  end
end
