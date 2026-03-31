import SectionLayout from "../Features/SectionLayout"
import BookpathProvider from "../context/BookPathProvider"
import BooksProvider from "../context/BookProvider"
import PageRangeProvider from "../context/PageRangeProvider"
import CurrerntRenderedBookurl from "../context/Currentrenderedbookpath"
import QuesionanswerProvider from "../context/QuestionanswerProvider"
import UserAnswerProvider from "../context/UserAnswerProvider"

function SectionPage()
{
return (
    <div className="grid bg-blue-300 grid-cols-12 h-screen">
        <BooksProvider>
        <BookpathProvider>
            <PageRangeProvider>
                <CurrerntRenderedBookurl>
                    <QuesionanswerProvider>
                        <UserAnswerProvider>
        <SectionLayout/>
                        </UserAnswerProvider>
                    </QuesionanswerProvider>
                </CurrerntRenderedBookurl>
            </PageRangeProvider>
        </BookpathProvider>
        </BooksProvider>
    </div>
)
}

export default SectionPage