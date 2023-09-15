const Sidebar = ({course}) => {
    let count = 0
    const {title, id} = course
    return (
        <div className="my-2">
                <ol> 
                    <li key={id} className="text-base text-gray-500"> {id} {title}</li>
                </ol>
        </div>
    );
};

export default Sidebar;