import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-nysaa-header.html';
import body from '@/components/exact/en-sa-stores-nysaa-body.html';
import footer from '@/components/exact/en-sa-stores-nysaa-footer.html';
import inline from '@/components/exact/en-sa-stores-nysaa.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
