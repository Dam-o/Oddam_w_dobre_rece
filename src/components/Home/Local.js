import Reac from 'react'

export default function Local() {
    return (
        <article className="whoInfo__about" style={{ marginBottom: "50px" }}>
            <p className="whoInfo__about--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <ul>
                <li className="listItem">
                    <div className="whoInfo__about--title">
                        <h5>Zbiórka “Lorem Ipsum 1”</h5>
                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    </div>
                    <p>Egestas, sed, tempus</p>
                </li>
                <li className="listItem">
                    <div className="whoInfo__about--title">
                        <h5>Zbiórka “Lorem Ipsum 2”</h5>
                        <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                    </div>
                    <p>Ut, aliquam, purus, sit, amet</p>
                </li>
                <li className="listItem">
                    <div className="whoInfo__about--title">
                        <h5>Zbiórka “Lorem Ipsum 3"</h5>
                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                    </div>
                    <p>Mi, quis, hendrerit, dolor</p>
                </li>
            </ul>
        </article>
    )
}
