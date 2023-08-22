import '../styles/SearchBar.css'

export const SearchBar = () => {

  return (
    <section className='searchBar-Container'>
      <input 
        type='text' 
        placeholder='Search your pokemon!'/>
      <button>
        <img 
          src='/assets/img/red_pokeball.png' 
          width={45} 
          height={45}
        />
      </button>
    </section>
  )
}
