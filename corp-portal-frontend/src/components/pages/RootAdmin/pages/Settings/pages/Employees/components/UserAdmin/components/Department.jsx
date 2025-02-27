export default function Department(args) {
    const isSelected = args.department.id === args.selectedId;

    return (
        <div className="department-container">
            <div className={isSelected ? 'department-item active' : 'department-item'} dept-id-attribute={args.department.id}
                onClick={() => args.onSelect(args.department.id)}
            >
                {args.department.name}
            </div>
            {args.department.children && args.department.children.map(child => (
                <Department
                    key={child.id}
                    department={child}
                    selectedId={args.selectedId}
                    onSelect={args.onSelect}
                />
            ))}
        </div>
    );
};