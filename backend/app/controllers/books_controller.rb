class BooksController < ApplicationController
  before_action :set_book, except: [:index, :create]
  def index 
    books = Book.all
    render json: books, 
      except: [:created_at, :updated_at]
  end

  def show 
    render json: @book, 
    except: [:created_at, :updated_at]
  end 

  def create 
    book = Book.new(book_params)
    if book.save 
      render json: book, 
      except: [:created_at, :updated_at]
    else  
      render json: { message: 'Unable to create book.'}
    end
  end 

  def update
    @book.update(book_params)
    if @book.save 
      render json: @book, 
      except: [:created_at, :updated_at]
    else  
      render json: { message: 'Unable to edit book.'}
    end
  end 

  def destroy 
    @book.destroy
  end

  private

  def set_book 
    @book = Book.find(params[:id])
  end 

  def book_params 
    params.require(:book).permit(:title, :publisher, :genre, :pages, :author)
  end 
end
