
class Example
  def initialize id
    @id = id
  end

  attr_reader :id
end

class Foo < Example
  def initialize id, name
    super id

    @name = name
  end

  def name
    @name.to_lower_case
  end
end

foo = Foo.new 1, 'Hello'
Console::log foo.id, foo.name # 1 hello





class Example
  constructor()
