const Sidebar = ({course}) => {
    const {title, id} = course
    return (
        <div className="my-2">
                <ol> 
                    <li className="text-base text-gray-500">{id} {title}</li>
                </ol>
        </div>
    );
};

export default Sidebar;