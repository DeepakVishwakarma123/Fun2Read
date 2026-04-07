import { FileUploadDemo } from "./FileUpload"
import StatusButtonLibraryContainer from "./StatusButtonsContainerLibrary"
import UploadedBooks from "./UploadedBook"

function LibraryMainContainer() {
    return (
        <div className="bg-[#131C2F] p-4 grid gap-2">
            <UploadedBooks/>
            <FileUploadDemo/>
        </div>
    )
}

export default LibraryMainContainer