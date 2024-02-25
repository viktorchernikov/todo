function ContentWrapper(props) {
    return (
        <main id="site-content-wrapper" class='d-flex justify-content-center'>
            {props.children}
        </main>
    )
}

export default ContentWrapper