import React from 'react'
import { 
    Page, 
    Text, 
    View, 
    Document, 
    StyleSheet, 
    PDFViewer, 
    Font,
    Image
} from '@react-pdf/renderer';

import { 
    Table, 
    TableHeader, 
    TableCell, 
    TableBody, 
    DataTableCell
} from '@david.kucsai/react-pdf-table'

import { useSelector } from 'react-redux';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E4E4E4',
        fontFamily: 'Sarabun',
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    container: {
        alignSelf: 'center',
        marginBottom: 5
    }
});

Font.register({
    family: 'Sarabun',
    fonts:[
        {
            src: './fonts/Sarabun-Regular.ttf'
        }
    ]
})

const PdfReport = () => {

    const cartLists = useSelector((state) => state.cartReducer.cartlist)

    return (
        <PDFViewer className="container-fluid" height={600}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.container}>
                        <Image src="/logo192.png" style={{width:50, height: 50}} />
                    </View>
                    <View>
                        <Text style={styles.title}>Shopping cart lists</Text>
                    </View>
                    <Table data={cartLists}>
                        <TableHeader textAlign="center">
                            <TableCell weighting={0.5}>Code</TableCell>
                            <TableCell>Course name</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Course price</TableCell>
                            <TableCell>Amount</TableCell>
                        </TableHeader>
                        <TableBody>
                            <DataTableCell weighting={0.5} style={{textAlign: 'center'}} getContent={(r) => r.id}/>
                            <DataTableCell getContent={(r) => r.name}/>
                            <DataTableCell style={{textAlign: 'center'}} getContent={(r) => r.qty}/>
                            <DataTableCell style={{textAlign: 'center'}} getContent={(r) => r.price}/>
                            <DataTableCell style={{textAlign: 'center'}} getContent={(r) => r.qty * r.price}/>
                        </TableBody>
                    </Table>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default PdfReport

