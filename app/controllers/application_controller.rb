class ApplicationController < ActionController::API

    def index
        redirect_to :file => 'public/index.html'
    end

end
