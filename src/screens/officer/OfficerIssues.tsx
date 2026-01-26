import { View, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../../screenComponents/IssueScreenComponents/SearchBar'
import OfficerIssueCard from '../../screenComponents/officerComponents/OfficerIssueCard'

const OfficerIssues = () => {
    const [searchQuery, setSearchQuery] = React.useState("");

    return (
        <ScrollView
            className="bg-background-bgcolor"
            contentContainerStyle={{ padding: 26, paddingBottom: 90, }}
        >
            <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <OfficerIssueCard searchQuery={searchQuery} />
        </ScrollView>

    )
}

export default OfficerIssues
