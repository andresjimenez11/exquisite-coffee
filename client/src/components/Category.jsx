import useStore from "../hooks/useStore"

export default function Category({category}) {
    
    const { handleClickCategory, currentCategory } = useStore();
    const {icon, id, name} = category

    const highlightCurrentCategory = () => currentCategory.id === id ? "bg-primary" : "bg-white"

    return (
        <button 
                className="text-lg font-bold cursor-pointer truncate w-full"
                type="button"
                onClick={() => handleClickCategory(id)}
        >
            <div className={`${highlightCurrentCategory()} flex items-center gap-4 border w-full p-3 hover:bg-primary cursor-pointer`}>
                <img 
                    alt="Icon image"
                    src={`/img/icono_${icon}.svg`}
                    className="w-12"
                />
                
                <p>{name}</p>
            </div>
        </button>
  )
}
