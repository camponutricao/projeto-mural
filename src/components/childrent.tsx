type ChildrenProps = {
    children?: string;
}

export function Childrent(props: ChildrenProps){
    return(
        <button>{props.children || 'Default'}</button>
    )
}

//utilizado quando o conteudo precisar estar dentro das tags do component criado <tag> </tag>