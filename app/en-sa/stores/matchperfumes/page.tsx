import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-matchperfumes-header.html';
import body from '@/components/exact/en-sa-stores-matchperfumes-body.html';
import footer from '@/components/exact/en-sa-stores-matchperfumes-footer.html';
import inline from '@/components/exact/en-sa-stores-matchperfumes.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
