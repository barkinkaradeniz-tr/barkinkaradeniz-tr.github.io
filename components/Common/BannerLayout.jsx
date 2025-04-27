const BannerLayout = ({ children }) => {
    return (
        <div className="inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
            <div className="bg-Black/5 backdrop-blur-sm w-full h-full flex flex-col justify-between">
                {children}
            </div>
        </div>
    )
}

export default BannerLayout
