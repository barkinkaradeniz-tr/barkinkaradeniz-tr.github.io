import { DETAILS } from "../../../constants/constants"
import { getObjectKeys } from "../../../utils/utils"

const Location = () => {
    const keys = getObjectKeys(DETAILS)
    const currentDate = Date.now()

    return (
        <div className="flex flex-col space-y-1 pt-6">
            {keys.map((key, index) => {
                return (
                    <div
                        key={index}
                        className="flex items-center justify-between"
                    >
                        <span className="text-Snow text-xs font-bold">
                            {key}
                        </span>
                        <span className="text-xs text-gray-600">
                            {key === "Age"
                                ? new Date(
                                      currentDate - new Date(DETAILS[key]),
                                  ).getFullYear() - 1970
                                : DETAILS[key]}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Location
