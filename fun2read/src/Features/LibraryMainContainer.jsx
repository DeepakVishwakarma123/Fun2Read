import { FileUploadDemo } from "./FileUpload"
import StatusButtonLibraryContainer from "./StatusButtonsContainerLibrary"
import UploadedBooks from "./UploadedBook"

function LibraryMainContainer() {
    return (
        <div className="bg-teal-950 p-4 grid gap-2">
            <StatusButtonLibraryContainer/>
            <UploadedBooks/>
            <FileUploadDemo/>
        </div>
    )
}

export default LibraryMainContainer