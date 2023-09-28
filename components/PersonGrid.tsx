// components/PersonGrid.tsx
import React from 'react';
import { Person } from '@/types/types';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

interface ActionsCellProps {
    params: GridCellParams;
    onDeleteButtonClick: (id: number) => Promise<void>;
}

const ActionsCell: React.FC<ActionsCellProps> = ({ params, onDeleteButtonClick }) => {
    const handleDeleteClick = () => {
        onDeleteButtonClick(params.id as number);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={handleDeleteClick}
            >
                Delete
            </Button>
        </div>
    );
};

interface PersonGridProps {
    people: Person[];
    onEditCellChange: (updatedPerson: Person) => Promise<void>;
    onDeleteButtonClick: (id: number) => Promise<void>;
}

const columns = (onDeleteButtonClick: (id: number) => Promise<void>): GridColDef[] => [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstname', headerName: 'First Name', width: 150, editable: true },
    { field: 'lastname', headerName: 'Last Name', width: 150, editable: true },
    { field: 'phone', headerName: 'Phone', width: 150, editable: true },
    {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        width: 150,
        renderCell: (params) => (
            <ActionsCell params={params} onDeleteButtonClick={onDeleteButtonClick} />
        ),
    },
];



const PersonGrid: React.FC<PersonGridProps> = ({ people, onEditCellChange, onDeleteButtonClick }) => {
    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={people}
                columns={columns(onDeleteButtonClick)}
                editMode="row"
                processRowUpdate={(newRow: Person, oldRow: Person) => {
                    onEditCellChange(newRow);
                    return Promise.resolve(newRow);
                }}
            />
        </div>
    );
};

export default PersonGrid;

