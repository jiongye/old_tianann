class SitemapsController < ApplicationController

  def index
    @pages = Refinery::Page.where(parent_id:nil)
  end

end