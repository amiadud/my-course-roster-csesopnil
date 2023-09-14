const Sidebar = ({course}) => {
    const {title} = course
    return (
        <div className=" my-2">
            <li>{title}</li>
        </div>
    );
};

export default Sidebar;