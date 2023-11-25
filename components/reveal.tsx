
export default function Reveal(
    props:{
        secretWord:string
    })
    {
    const secretWordList = () => {
        const secretWordArray = props.secretWord.split("");
        return secretWordArray.map((letter, index) => {
            return (
                <li key={index} tabIndex={0} className="digit">
                    <span>{letter}</span>
                </li>
            )
        })
    }
    return(
            <ul className="code">
                {secretWordList()}
            </ul>
    )
}