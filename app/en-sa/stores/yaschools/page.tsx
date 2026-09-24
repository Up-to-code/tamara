import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-yaschools-header.html';
import body from '@/components/exact/en-sa-stores-yaschools-body.html';
import footer from '@/components/exact/en-sa-stores-yaschools-footer.html';
import inline from '@/components/exact/en-sa-stores-yaschools.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
