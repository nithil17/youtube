import FilterBar from '../../components/FilterBar/FilterBar'
import VideoGrid from '../../components/VideoGrid/VideoGrid'
import "./Home.css"
const Home = (
    {
        searchText,
        selectedCategory,
        setSelectedCategory
    }
) => {
    return (
                <section className='content'>
                    <FilterBar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <VideoGrid
                        searchText={searchText}
                        selectedCategory={selectedCategory}
                    />
                </section>
    )
}
export default Home;
