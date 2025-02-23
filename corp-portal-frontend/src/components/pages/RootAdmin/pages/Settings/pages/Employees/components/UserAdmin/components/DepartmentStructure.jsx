import Department from "./Department";

export default function DepartmentStructure(args){
    return (
        <div>
            {args.data.map(department => (
                <Department
                    key={department.id}
                    department={department}
                    selectedId={args.selectedId}
                    onSelect={args.onSelect}
                />
            ))}
        </div>
    );
};