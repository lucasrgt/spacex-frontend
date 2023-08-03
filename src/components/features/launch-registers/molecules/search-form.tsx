import { MdSearch } from 'react-icons/md'

const SearchForm = () => {
  return (
    <form className="">
      <label className="flex border-spaceblue-500 rounded-lg px-4 py-2 border justify-between items-center">
        <input
          className="bg-transparent  text-spaceblue-500 placeholder:text-spaceblue-500"
          type="text"
          name="rocket-search"
          placeholder="PROCURAR"
        />
        <button>
          <MdSearch class="fill-spaceblue-500" size="20" />
        </button>
      </label>
    </form>
  )
}

export default SearchForm
