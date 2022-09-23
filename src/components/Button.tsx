interface IProps {
    name: string;
    onClick: () => void;
}

export const Button = (props: IProps) => {
    return (
        <button onClick={props.onClick}>{props.name}</button>
    );
}