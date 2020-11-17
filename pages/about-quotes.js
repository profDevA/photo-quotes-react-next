import Header from '../components/header'
import Footer from '../components/footer'

export default function AboutQutotes() {
    return (
        <>
            <Header title={About - PhotoQuotes} />
            <main>
                <section className="container pt80 pb70">
                    <div className="side-col-container row">
                        <div className="side-col-container__left col-xl-9 col-lg-8 mt0">
                            <div className="side-col-container__content">
                                <h1 className="main-title">About Quotes</h1>
                                <p className="title side-col-container__title">
                                    Text
                                </p>
                                <p className="text18 side-col-container__desc">
                                    If you have read this far, we both know you are serious about succeeding, getting the most out of life, and attaining your goals.
                                </p>
                                <p className="text18 side-col-container__desc">
                                    Now, how do you “keep the fire burning” during life’s daily struggle? It’s simple really, but will require the patience to take each task into consideration, without doing everything at once.
                                </p>
                                <p className="text18 side-col-container__desc">
                                    You will get the urge to make up for lost time. You now want to jump ahead at “light speed.” If you already read Parts One and Two of this series, you are way ahead of the pack. So many people sit around and dream, doubt, or just talk, but very few take action and then stick with it.
                                </p>
                                <p className="text18 side-col-container__desc">
                                    The next step is to get a “coach.” You are now thinking, coaches are expensive; and you are right, but you don’t have to spend much. Here’s how it works: Look for the most positive person you can find, see, or hear, around you. This person is full of positive energy, and all you have to do is listen.
                                </p>
                                <img src="assets/about1.jpg" alt="" className="side-col-container__img" />
                                <p className="text18 side-col-container__desc">
                                    You can be selective about advice, but realize that positive energy is contagious, and you will walk away from conversations with positive energy, too. On the other hand, stay away from negative talk; it is also contagious.
                                </p>
                                <p className="text18 side-col-container__desc">
                                    Are you in need of more positive energy? No problem – read articles like this, read self-improvement books, or listen to inspirational audio books, to instill positive energy within you. You can’t lose with a steady dose of positive energy to carry you through the day.
                                </p>
                                <p className="text18 side-col-container__desc">
                                    So how do you separate good information from bad? Where do you start, and what, or who, would you listen to first? In the last, and final article of this series, I promise to reveal some great resources, but for now, it’s a good idea to gain positive energy by choosing sources that you find interesting.
                                </p>
                                <img src="assets/about2.jpg" alt="" className="side-col-container__img" />
                                <p className="text18 side-col-container__desc">
                                    If I lead you to a classic self-improvement book, you might find it boring. However, if you start to read something and can’t put it down, you are getting positive energy and you are enjoying it.
                                </p>
                                <p className="text18 side-col-container__desc">
                                    Do yourself a favor, and get a self-improvement source today. You don’t have to implement all of the advice you read – just take what fits into your lifestyle.
                                </p>
                                <p className="text18 side-col-container__desc">
                                    Now, let’s look at visualization. This is an extremely powerful treasure, and all of us have the ability to visualize. Ever since the first human had a fantasy, and it came to pass, the power of visualization has built entire civilizations.
                                </p>
                            </div>
                        </div>

                        <div className="side-col-container__right col-xl-3 col-lg-4 mt0">
                            <div className="banner-container-200">
                                <img src="assets/google-200.jpg" alt="" className="banner-200__left" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb80">
                    <div className="banner-container banner-container-728">
                        <img src="assets/google-728.jpg" alt="" className="" />
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}