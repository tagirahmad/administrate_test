require "administrate/field/base"

class TiptapField < Administrate::Field::Base
  def to_s
    data
  end
end
