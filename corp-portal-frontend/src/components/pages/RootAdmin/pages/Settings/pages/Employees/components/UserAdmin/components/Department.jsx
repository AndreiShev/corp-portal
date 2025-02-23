export default function Department(args) {
    const isSelected = args.department.id === args.selectedId;

    return (
        <div style={{ marginLeft: '20px' }}>
            <div
                style={{
                    fontWeight: isSelected ? 'bold' : 'normal',
                    cursor: 'pointer',
                    color: isSelected ? 'blue' : 'black',
                }}
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