module ApplicationHelper

  def get_root_page(page)
    if page.parent
      get_root_page(page.parent)
    else
      page
    end
  end

end
