class CreateInterviewers < ActiveRecord::Migration[6.1]
  def change
    create_table :interviewers do |t|
      t.string :id
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end
