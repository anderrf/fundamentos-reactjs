import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/anderrf.png" />
                    <div className={styles.authorInfo}>
                        <strong>Anderson Farias</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="06 de Junho, às 12:00" dateTime="2024-06-06 12:00:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Novo texto</p>
                <p>Texto padrão para post</p>
                <p><a href="">https://github.com/anderrf</a></p>
                <p>
                    <a href="">#dev</a> {' '}
                    <a href=''>#react</a> 
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}