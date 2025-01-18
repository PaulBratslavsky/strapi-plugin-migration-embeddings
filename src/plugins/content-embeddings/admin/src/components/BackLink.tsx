import { Button } from '@strapi/design-system'
import { ArrowLeft } from '@strapi/icons'
import { useNavigate } from 'react-router-dom';

export default function BackLink() {
  const navigate = useNavigate();
  return <Button variant="tertiary" startIcon={<ArrowLeft />} onClick={() => navigate(-1)}> Go back </Button>
}
