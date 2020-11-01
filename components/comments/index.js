export default function Comments() {
    return (
        <section className="comments-container">
            <div className="comments-title">
                <h3 className="comments-title__item">Comments</h3>
                <span className="comments-title__counter">3</span>
            </div>
            <div className="comment row comment__user">
                <div className="comment__person col-1">
                    <img src="assets/ava1.jpg" alt="" />
                </div>
                <div className="comment__right col">
                    <form action="" className="comment-form__container">
                        <div className="row container-offset-10">
                            <div className="col-lg-6 col-12 mb-lg-0 mb-4">
                                <label htmlFor="name" generated="true" className="error message message-top"></label>
                                <input type="text" placeholder="Name" className="gray-form__elem" name="name" id="name" />
                            </div>
                            <div className="col-lg-6 col-12">
                                <label htmlFor="email" generated="true" className="error message message-top"></label>
                                <input type="email" placeholder="Email" className="gray-form__elem" name="email" id="email" />
                            </div>
                        </div>
                        <div className="submit-input">
                            <label htmlFor="message" generated="true" className="error message message-bottom"></label>
                            <textarea placeholder="Add comment" rows='1' className="gray-form__elem rel" name="message" id="message"></textarea>
                            <button type="submit" className="send-icon"></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="comment row">
                <div className="comment__person col-1">
                    <img src="assets/ava2.jpg" alt="" />
                </div>
                <div className="comment__right col">
                    <div className="comment__info">
                        <p className="text20">Veerle de Bree</p>
                        <p className="text__small">22.08.2018</p>
                    </div>
                    <p className="comment__text text16">
                        Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).
                        However, there is much more to branding than just looking good. Particularly in this web 2.0 eras, where a powerful web presence has become a vital ingredient of your branding strategy, developing the right media mix holds the key to building powerful brand equity. In other words, a right media mix would mean:
                    </p>
                    <div className="comment__footer">
                        <p className="reply-text text16 blue-font bold">Reply</p>

                        <div className="comment__icons liked-item">
                            <span className="like like-gray"></span>
                            <span className="counter__comments">12</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment row">
                <div className="comment__person col-1">
                    <img src="assets/ava3.jpg" alt="" />
                </div>
                <div className="comment__right col">
                    <div className="comment__info">
                        <p className="text20">Onuchukwu Iweobiegbulam</p>
                        <p className="text__small">22.08.2018</p>
                    </div>
                    <p className="comment__text text16">
                        Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).
                        However, there is much more to branding than just looking good. Particularly in this web 2.0 eras, where a powerful web presence has become a vital ingredient of your branding strategy, developing the right media mix holds the key to building powerful brand equity. In other words, a right media mix would mean:
                    </p>
                    <div className="comment__footer">
                        <p className="reply-text text16 blue-font bold">Reply</p>

                        <div className="comment__icons">
                            <span className="like like-gray"></span>
                            <span className="counter__comments">6</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment comment__second row">
                <div className="comment__person col-1">
                    <img src="assets/ava4.jpg" alt="" />
                </div>
                <div className="comment__right col">
                    <div className="comment__info">
                        <p className="text20">Veerle de Bree</p>
                        <p className="text__small">22.08.2018</p>
                    </div>
                    <p className="comment__text text16">
                        Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).
                        However, there is much more to branding than just looking good. Particularly in this web 2.0 eras, where a powerful web presence has become a vital ingredient of your branding strategy, developing the right media mix holds the key to building powerful brand equity. In other words, a right media mix would mean:
                    </p>
                    <div className="comment__footer">
                        <p className="reply-text text16 blue-font bold">Reply</p>

                        <div className="comment__icons">
                            <span className="like like-gray"></span>
                            <span className="counter__comments">20</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}