import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-may-ward-header.html';
import body from '@/components/exact/en-sa-stores-may-ward-body.html';
import footer from '@/components/exact/en-sa-stores-may-ward-footer.html';
import inline from '@/components/exact/en-sa-stores-may-ward.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
