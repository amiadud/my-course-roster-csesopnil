const Sidebar = ({course, id}) => {
    const {title} = course
    return (
        <div className="my-2">
                <ol> 
                    <li className="text-base text-gray-500"> {id+1} {title}</li>
                </ol>
        </div>
    );
};

export default Sidebar;